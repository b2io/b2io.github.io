import styled from '@emotion/styled';

import { FC } from 'react';
import { TeamMemberCard } from './TeamMemberCard';
import { atMinDesktop, atMinTablet, atMinXL } from '~/theme';

import team from 'team.json';

const TeamMasonry = styled.section`
  columns: 1;

  ${atMinTablet} {
    column-gap: 2rem;
    columns: 2;

    & article {
      break-inside: avoid;
      margin-bottom: 4rem;
      &:nth-of-type(1) {
        padding-top: 10rem;
      }
    }
  }

  ${atMinXL} {
    columns: 3;

    & article {
      margin-bottom: 8rem;
      width: 100%;
      &:nth-of-type(1) {
        padding-top: 8rem;
      }
      &:nth-of-type(5) {
        padding-top: 16rem;
      }
    }
  }

  ${atMinDesktop} {
    margin-left: -3.5rem;
    margin-right: -3.5rem;
  }
`;

export const TeamCardList: FC = () => {
  return (
    <TeamMasonry>
      {team.map((member, index) => {
        return (
          <TeamMemberCard
            alt={member.name}
            key={index}
            name={member.name}
            position={member.position}
            src={member.src}
          />
        );
      })}
    </TeamMasonry>
  );
};
