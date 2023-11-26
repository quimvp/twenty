import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Decorator } from '@storybook/react';

import { SnackBarProviderScope } from '@/ui/feedback/snack-bar-manager/scopes/SnackBarProviderScope';
import { ClientConfigProvider } from '~/modules/client-config/components/ClientConfigProvider';
import { DefaultLayout } from '~/modules/ui/layout/page/DefaultLayout';
import { UserProvider } from '~/modules/users/components/UserProvider';

import { FullHeightStorybookLayout } from '../FullHeightStorybookLayout';

export type PageDecoratorArgs = {
  routePath: string;
  routeParams: RouteParams;
};

type RouteParams = {
  [param: string]: string;
};

const computeLocation = (routePath: string, routeParams: RouteParams) => {
  return {
    pathname: routePath.replace(
      /:(\w+)/g,
      (paramName) => routeParams[paramName] ?? '',
    ),
  };
};

export const PageDecorator: Decorator<{
  routePath: string;
  routeParams: RouteParams;
}> = (Story, { args }) => (
  <UserProvider>
    <ClientConfigProvider>
      <MemoryRouter
        initialEntries={[computeLocation(args.routePath, args.routeParams)]}
      >
        <FullHeightStorybookLayout>
          <HelmetProvider>
            <SnackBarProviderScope snackBarManagerScopeId="snack-bar-manager">
              <DefaultLayout>
                <Routes>
                  <Route path={args.routePath} element={<Story />} />
                </Routes>
              </DefaultLayout>
            </SnackBarProviderScope>
          </HelmetProvider>
        </FullHeightStorybookLayout>
      </MemoryRouter>
    </ClientConfigProvider>
  </UserProvider>
);
