type StatisticRecCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_enabled: XmlElem<boolean>;
  auto_calc: XmlElem<boolean>;
  last_calculate_date: XmlElem<Date | null>;
  calc_period: XmlElem<number | null>;
  context_calc: XmlElem<boolean>;
  ready_to_analytics: XmlElem<boolean>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  period_type: XmlMultiElemObject<string | null>;
  period_calc_type: XmlElem<string, typeof common.period_calc_types>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  depth: XmlElem<number | null>;
  norm_from: XmlElem<number | null>;
  norm_to: XmlElem<number | null>;
  notification_type_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number | null>;
  catalog: XmlMultiElemObject<string | null, typeof common.exchange_object_types>;
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
