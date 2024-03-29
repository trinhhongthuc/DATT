import { formatRelative } from "date-fns/esm";
export const listStatus = [
  {
    type: 0,
    status: "Active",
  },

  {
    type: 1,
    status: "Inactive",
  },

  {
    type: 2,
    status: "Block",
  },
];

export function formatDate(seconds) {
  let formattedDate = "";

  if (seconds) {
    formattedDate = formatRelative(new Date(seconds * 1000), new Date());

    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return formattedDate;
}
