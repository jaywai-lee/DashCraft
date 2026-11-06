import { WidgetRow } from "../api/dashboardRepository";
import { WIDGET_CONFIG_MAP } from "../config/widgets.config";

export const generateNextWidgetTitle = (
  type: WidgetRow["type"],
  existingWidgets: WidgetRow[],
  defaultTitle?: string,
): string => {
  const config = WIDGET_CONFIG_MAP[type as keyof typeof WIDGET_CONFIG_MAP];
  const baseTitle = defaultTitle || config?.title || "위젯";
  const sameTypeWidgets = existingWidgets.filter((w) => w.type === type);

  if (sameTypeWidgets.length === 0) {
    return `${baseTitle} 1`;
  }

  let maxNum = 0;
  const numRegex = new RegExp(`^${baseTitle}\\s*(\\d+)$`);

  sameTypeWidgets.forEach((w) => {
    const trimmedTitle = w.title.trim();
    const match = trimmedTitle.match(numRegex);

    if (match) {
      const num = parseInt(match[1], 10);
      if (!isNaN(num) && num > maxNum) {
        maxNum = num;
      }
    } else if (trimmedTitle === baseTitle) {
      if (maxNum < 1) {
        maxNum = 1;
      }
    }
  });

  return `${baseTitle} ${maxNum + 1}`;
};
