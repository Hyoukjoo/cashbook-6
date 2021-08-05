import { CategoryHistoryDto } from "apis/history/dto";
import History from "models/History";

export interface LargeHistoryItemProps extends History {}

export interface SmallHistoryItemProps extends CategoryHistoryDto {}
