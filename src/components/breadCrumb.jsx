import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router-dom';

function handleClick1(event) {
  event.preventDefault();
  history.push("/");
}
function handleClick2(event) {
  event.preventDefault();
  history.push("/Form");
}

export default function CustomSeparator() {
  const history=useHistory();
  const breadcrumbs = [
    <Link underline="hover" key="1" color="#FAF7F2" href="/" onClick={handleClick1}>
      Anasayfa
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#FAF7F2"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick2}
    >
      Seçenekler
    </Link>,
    <Typography key="3" color="#FAF7F2">
      Sipariş Oluştur
    </Typography>,
  ];

  return (
    <Stack spacing={2}> 
      <Breadcrumbs  separator="-" aria-label="breadcrumb" color="#FAF7F2">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}