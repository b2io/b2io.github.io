import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../theme';
import { GlobalNavigation, JobsHeaderSmall, Main } from '../../components';

function JobsPageDescription() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <GlobalNavigation />
        <JobsHeaderSmall />
      </Main>
    </ThemeProvider>
  );
}

export default JobsPageDescription;
