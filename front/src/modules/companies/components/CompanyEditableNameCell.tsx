import { CellCommentChip } from '@/comments/components/CellCommentChip';
import { useOpenTimelineRightDrawer } from '@/comments/hooks/useOpenTimelineRightDrawer';
import EditableChip from '@/ui/components/editable-cell/types/EditableChip';
import { getLogoUrlFromDomainName } from '@/utils/utils';
import {
  CommentableType,
  GetCompaniesQuery,
  useUpdateCompanyMutation,
} from '~/generated/graphql';

import CompanyChip from './CompanyChip';

type OwnProps = {
  company: Pick<
    GetCompaniesQuery['companies'][0],
    'id' | 'name' | 'domainName' | '_commentCount' | 'accountOwner'
  >;
};

export function CompanyEditableNameChipCell({ company }: OwnProps) {
  const openCommentRightDrawer = useOpenTimelineRightDrawer();
  const [updateCompany] = useUpdateCompanyMutation();

  function handleCommentClick(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    openCommentRightDrawer([
      {
        type: CommentableType.Company,
        id: company.id,
      },
    ]);
  }

  return (
    <EditableChip
      value={company.name || ''}
      placeholder="Name"
      picture={getLogoUrlFromDomainName(company.domainName)}
      id={company.id}
      changeHandler={(value: string) => {
        updateCompany({
          variables: {
            ...company,
            name: value,
            accountOwnerId: company.accountOwner?.id,
          },
        });
      }}
      ChipComponent={CompanyChip}
      rightEndContents={[
        <CellCommentChip
          count={company._commentCount ?? 0}
          onClick={handleCommentClick}
        />,
      ]}
    />
  );
}
