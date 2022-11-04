import { tests } from "../consts";

export const generateTestId = (id: string) => ({
  "data-testid": `${tests.TEST_ID_START}${id}`,
});
