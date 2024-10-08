declare namespace tools_app {
    let object_library: XmlElem<unknown>;

    function get_str_app_instance_id(applicationInstanceId: number): unknown;

    function get_application(object: unknown): unknown;

    function get_application_instance(object: unknown, applicationId: number): unknown;

    let cur_application: XmlElem<unknown>;

    function get_cur_application(applicationId: number, applicationInstanceId: number, objectId: number, objectTopElem: unknown): unknown;

    let cur_application_instance: XmlElem<unknown>;

    function get_cur_application_instance(applicationId: number, applicationInstanceId: number, objectId: number, objectTopElem: unknown): unknown;

    function set_cur_application_instance(applicationInstanceId: number, applicationInstanceTopElem: unknown): unknown;

    function create_application_instance(applicationId: number, returnId: number): unknown;

    function create_application_instance_object(objectName: string, objectFields: unknown, applicationInstanceId: number, save: boolean): unknown;

    function get_cur_user_application_access_level(applicationId: number): unknown;

    function get_application_lib_url(applicationCode: string, applicationLibraryUrl: string, applicationVendor: string, applicationVendorLibrary: string, applicationLicType: string): unknown;

    function get_application_lib(object: unknown): unknown;

    let cur_application_lib: XmlElem<unknown>;

    function get_cur_application_lib(applicationId: number, applicationInstanceId: number, objectId: number, objectTopElem: unknown): unknown;

    function convert_wvars_to_object(vars: unknown, format: string, parentId: number, resultElem: unknown): unknown;

    function get_settings(name: string, target: string, format: string, object: unknown): Object;

    function get_cur_settings(name: string, target: string, format: string, applicationId: number, applicationInstanceId: number, objectId: number, objectTopElem: unknown): unknown;

    function call_application_library_method(object: unknown, methodName: string, arrMethod: unknown): unknown;

    function get_application_resources_list(object: unknown): unknown;

    function get_application_resource(object: unknown, resourceUrl: string): unknown;

    function package_application(object: unknown): unknown;

    function clear_application_cache(applicationCode: string, componentCode: string): unknown;

    function get_application_ids(object: unknown): unknown;

    function get_application_objects(object: unknown, arrCatalogs: unknown): unknown;

    function save_cur_application_settings(lastApplication: unknown, newSettings: unknown): unknown;

    function save_application_settings(applicationId: number, settingsTopElem: unknown): unknown;

    function save_application_agents(aAgents: unknown): unknown;

    function save_application_object(docObject: unknown, codeWvar: unknown, applicationId: number): unknown;
}
