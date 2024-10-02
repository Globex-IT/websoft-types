type ObjectClaimDocumentTopElem = XmlTopElem & {
    Doc: ObjectClaimDocument;
    id: XmlElem<number | null>;
    /** Код */
    code: XmlElem<string | null>;
    /** Название */
    name: XmlElem<string | null>;
    source_type: XmlElem<string | null>;
    source_id: XmlElem<number | null>;
    source_name: XmlElem<string | null>;
    source_code: XmlElem<string | null>;
    source_role: XmlElem<string | null>;
    object_type: XmlElem<string | null>;
    object_id: XmlElem<number | null>;
    object_name: XmlElem<string | null>;
    object_code: XmlElem<string | null>;
    element_type: XmlElem<string | null>;
    element_id: XmlElem<number | null>;
    element_name: XmlElem<string | null>;
    element_code: XmlElem<string | null>;
    read: XmlElem<boolean>;
    write: XmlElem<boolean>;
    delete: XmlElem<boolean>;
    list: XmlElem<boolean>;
    execute: XmlElem<boolean>;
    access_level: XmlElem<number | null>;
    value: XmlElem<string | null>;
    is_active: XmlElem<boolean>;
    /** Дата начала */
    start_date: XmlElem<Date | null>;
    /** Дата завершения */
    finish_date: XmlElem<Date | null>;
    data_str: XmlElem<string | null>;
    /** Является системным */
    is_std: XmlElem<boolean>;
    /** Измененный */
    changed: XmlElem<boolean>;
    /** Информация об объекте */
    doc_info: XmlElem<DocInfoBase | null>;
    /** Комментарий */
    comment: XmlElem<string | null>;
    is_manual: XmlElem<boolean | null>;
};

type ObjectClaimDocument = XmlDocument & {
    TopElem: ObjectClaimDocumentTopElem;
    object_claim: ObjectClaimDocumentTopElem;
    DocDesc(): string;
};
