import type { OrganizationsList_user$key } from '@/api/relay/generated/OrganizationsList_user.graphql';
import { Image } from '@/shared/components/ui/Image';
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';

const OrganizationsFragment = graphql`
  fragment OrganizationsList_user on User {
    id
    login
    organizations(first: 10) {
      nodes {
        id
        name
        url
        avatarUrl
      }
    }
  }
`;

type Props = {
  user: OrganizationsList_user$key;
};

export default function OrganizationsList({ user }: Props) {
  const data = useFragment(OrganizationsFragment, user);

  if (!data || !data.organizations || !data.organizations.nodes) {
    return <div>No organizations to display.</div>;
  }

  console.log('ORGANIZATIONS', data);

  return (
    <div className="flex flex-col gap-2">
      <h3>Organizations</h3>
      <ul className="flex">
        {data.organizations.nodes.map((org) => (
          <li key={org?.id}>
            <Image
              svg={org?.avatarUrl || ''}
              alt={org?.name || 'Organization'}
              width={36}
              height={36}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
