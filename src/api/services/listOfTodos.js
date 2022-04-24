import jsonPlaceholder from "api/configs/jsonPlaceholder";
import { JSON_PLACEHOLDER_ENDPOINTS } from "api/constants";

export default {
  getListOfTodos: (): void =>
    jsonPlaceholder.get(JSON_PLACEHOLDER_ENDPOINTS.LIST_OF_TODOS),
};
