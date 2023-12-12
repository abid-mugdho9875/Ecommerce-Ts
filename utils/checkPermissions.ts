import { CustomAPIError } from "../errors";

const checkPermissions = (
  requestUser: { role: string; userId: string },
  resourceUserId: string
): void => {
  console.log(requestUser);
  console.log(resourceUserId);
  console.log(typeof resourceUserId);

  // Uncomment and modify the following logic as needed
  // if (requestUser.role === 'admin') return;
  // if (requestUser.userId === resourceUserId.toString()) return;

  throw new CustomAPIError("Not authorized to access this route");
};

export default checkPermissions;
