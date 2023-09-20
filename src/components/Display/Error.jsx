import { Box } from "../../layouts";

const Error = ({ msg }) => {
  return (
    <Box>
      <p className="text-center text-2xl text-white mx-4 mt-96">{msg}</p>
    </Box>
  );
};
export default Error;
