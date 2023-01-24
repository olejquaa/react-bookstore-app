import { Tabs } from "antd";
import type { TabsProps } from "antd";

export const TabsPanel = ({ defaultActiveKey, items, children }: TabsProps) => {
  return <Tabs type="line" defaultActiveKey={defaultActiveKey} items={items} children={children} />;
};
