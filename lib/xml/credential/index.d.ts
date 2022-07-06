interface IWTCredentialTopElem extends IWTDocInfo {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  login?: XmlElem<string>;
  password?: XmlElem<string>;
  remote_security_profile_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

type IWTCredentialDocument = XmlDocument<IWTCredentialTopElem>;
