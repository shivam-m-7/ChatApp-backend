import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/layout";

const UserBadgeItem = ({ admin, user, handleFunction }) => {
  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="red"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}

      <CloseIcon pl={1} />
    </Badge>
  );
};

export default UserBadgeItem;