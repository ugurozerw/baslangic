import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function Badges() {
  return (
    <Stack direction="vertical" gap={2}>
  <Stack direction="horizontal" gap={2}>
    <Badge bg="primary">Güvenli</Badge>
    <Badge bg="secondary">Temiz</Badge>
    <Badge bg="success">7/24 İade</Badge>
    <Badge bg="danger">Hızlı</Badge>
  </Stack>
  <Stack direction="horizontal" gap={2}>
    <Badge bg="warning" text="dark">
      Önemseyen
    </Badge>
    <Badge bg="info">İletişim</Badge>
    <Badge bg="light" text="dark">
      Bizimle Çalışın!
    </Badge>
    <Badge bg="dark"></Badge>
  </Stack>
</Stack>

  );
}

export default Badges;