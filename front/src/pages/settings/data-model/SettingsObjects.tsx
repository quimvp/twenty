import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { activeMetadataObjectsSelector } from '@/metadata/states/selectors/activeMetadataObjectsSelector';
import { disabledMetadataObjectsSelector } from '@/metadata/states/selectors/disabledMetadataObjectsSelector';
import { SettingsHeaderContainer } from '@/settings/components/SettingsHeaderContainer';
import { SettingsPageContainer } from '@/settings/components/SettingsPageContainer';
import {
  SettingsObjectItemTableRow,
  StyledObjectTableRow,
} from '@/settings/data-model/object-details/components/SettingsObjectItemTableRow';
import { SettingsObjectCoverImage } from '@/settings/data-model/objects/SettingsObjectCoverImage';
import { SettingsObjectDisabledMenuDropDown } from '@/settings/data-model/objects/SettingsObjectDisabledMenuDropDown';
import { IconChevronRight, IconPlus, IconSettings } from '@/ui/display/icon';
import { IconComponent } from '@/ui/display/icon/types/IconComponent';
import { H1Title } from '@/ui/display/typography/components/H1Title';
import { H2Title } from '@/ui/display/typography/components/H2Title';
import { Button } from '@/ui/input/button/components/Button';
import { SubMenuTopBarContainer } from '@/ui/layout/page/SubMenuTopBarContainer';
import { Section } from '@/ui/layout/section/components/Section';
import { Table } from '@/ui/layout/table/components/Table';
import { TableHeader } from '@/ui/layout/table/components/TableHeader';
import { TableSection } from '@/ui/layout/table/components/TableSection';

const StyledIconChevronRight = styled(IconChevronRight)`
  color: ${({ theme }) => theme.font.color.tertiary};
`;

const StyledH1Title = styled(H1Title)`
  margin-bottom: 0;
`;

export const SettingsObjects = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const activeMetadataObjects = useRecoilValue(activeMetadataObjectsSelector);
  const disabledMetadataObjects = useRecoilValue(
    disabledMetadataObjectsSelector,
  );

  const [icons, setIcons] = useState<Record<string, IconComponent>>({});

  useEffect(() => {
    import('@/ui/input/constants/icons').then((lazyLoadedIcons) => {
      setIcons(lazyLoadedIcons);
    });
  }, []);

  return (
    <SubMenuTopBarContainer Icon={IconSettings} title="Settings">
      <SettingsPageContainer>
        <SettingsHeaderContainer>
          <StyledH1Title title="Objects" />
          <Button
            Icon={IconPlus}
            title="New object"
            accent="blue"
            size="small"
            onClick={() => {
              navigate('/settings/objects/new');
            }}
          />
        </SettingsHeaderContainer>
        <div>
          <SettingsObjectCoverImage />
          <Section>
            <H2Title title="Existing objects" />
            <Table>
              <StyledObjectTableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader align="right">Fields</TableHeader>
                <TableHeader align="right">Instances</TableHeader>
                <TableHeader></TableHeader>
              </StyledObjectTableRow>
              <TableSection title="Active">
                {activeMetadataObjects.map((objectItem) => (
                  <SettingsObjectItemTableRow
                    key={objectItem.namePlural}
                    Icon={icons[objectItem.icon || '']}
                    objectItem={objectItem}
                    action={
                      <StyledIconChevronRight
                        size={theme.icon.size.md}
                        stroke={theme.icon.stroke.sm}
                      />
                    }
                    onClick={() =>
                      navigate(`/settings/objects/${objectItem.namePlural}`)
                    }
                  />
                ))}
              </TableSection>
              {!!disabledMetadataObjects.length && (
                <TableSection title="Disabled">
                  {disabledMetadataObjects.map((objectItem) => (
                    <SettingsObjectItemTableRow
                      key={objectItem.namePlural}
                      Icon={icons[objectItem.icon || '']}
                      objectItem={objectItem}
                      action={
                        <SettingsObjectDisabledMenuDropDown
                          scopeKey={objectItem.namePlural}
                          handleActivate={() => undefined}
                          handleErase={() => undefined}
                        />
                      }
                    />
                  ))}
                </TableSection>
              )}
            </Table>
          </Section>
        </div>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
