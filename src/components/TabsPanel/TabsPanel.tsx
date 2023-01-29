import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { memo } from "react";

export const TabsPanel = memo(({ defaultActiveKey, items, children }: TabsProps) => {
  return <Tabs type="line" defaultActiveKey={defaultActiveKey} items={items} children={children} />;
});
