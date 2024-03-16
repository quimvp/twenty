import { Injectable } from '@nestjs/common';

import axios from 'axios';

import { EnvironmentService } from 'src/engine/integrations/environment/environment.service';
import { ConnectedAccountRepository } from 'src/modules/connected-account/repositories/connected-account/connected-account.repository';

@Injectable()
export class GoogleAPIsRefreshAccessTokenService {
  constructor(
    private readonly environmentService: EnvironmentService,
    private readonly connectedAccountService: ConnectedAccountRepository,
  ) {}

  async refreshAndSaveAccessToken(
    workspaceId: string,
    connectedAccountId: string,
  ): Promise<void> {
    const connectedAccount = await this.connectedAccountService.getById(
      connectedAccountId,
      workspaceId,
    );

    if (!connectedAccount) {
      throw new Error(
        `No connected account found for ${connectedAccountId} in workspace ${workspaceId}`,
      );
    }

    const refreshToken = connectedAccount.refreshToken;

    if (!refreshToken) {
      throw new Error(
        `No refresh token found for connected account ${connectedAccountId} in workspace ${workspaceId}`,
      );
    }

    const accessToken = await this.refreshAccessToken(refreshToken);

    await this.connectedAccountService.updateAccessToken(
      accessToken,
      connectedAccountId,
      workspaceId,
    );
  }

  async refreshAccessToken(refreshToken: string): Promise<string> {
    const response = await axios.post(
      'https://oauth2.googleapis.com/token',
      {
        client_id: this.environmentService.get('AUTH_GOOGLE_CLIENT_ID'),
        client_secret: this.environmentService.get('AUTH_GOOGLE_CLIENT_SECRET'),
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data.access_token;
  }
}
