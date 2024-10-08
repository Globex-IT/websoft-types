declare namespace ms_tools {
    function get_url_from_catalog(catalogName: string, id: number): unknown;

    function view_open_doc(catalogName: string, id: number, topElem: unknown): unknown;

    function view_delete_doc(catalogName: unknown): unknown;

    function raise_system_event(code: unknown, systemEventId: number, objectDocId: number, objectDoc: unknown): unknown;

    function raise_system_event_env(systemEventId: unknown, params: unknown): unknown;

    let notes_var: XmlElem<unknown>;

    function notes_verify_password(clearPassword: unknown, hashPassword: unknown): unknown;

    function set_ui_lng(uiLngId: number): unknown;

    function get_const(uiLngId: number): unknown;

    function eval_column_const(uiLngId: number): unknown;

    function eval_column_name(code: string, listElem: unknown): unknown;

    function obtain_ui_lngs(): unknown;

    function compare_versions(version: unknown, curVersion: unknown): unknown;

    function verify_disp_object_blocks(docSource: unknown): unknown;

    function delete_resource(resource: unknown): unknown;

    function delete_url_on_server(url: string): unknown;

    function init_view(sourceTarget: unknown): unknown;

    function get_log_email_errors(dtLastDate: Date): unknown;

    function get_border_panel_object(borderPanel: unknown): unknown;

    function open_dlg_global_settings(selTab: string): unknown;

    function check_doc_screen_access(topElem: unknown): unknown;

    function check_access_block_rights(accessBlock: string, right: string, user: unknown): unknown;

    function obtain_shared_list_elem(listPath: string, primaryKey: string, listElem: unknown): unknown;

    function delete_shared_list_elem(listPath: string, primaryKey: string): unknown;

    function save_cached_doc(doc: unknown): unknown;

    function trigger_onsavedoc(doc: unknown): unknown;

    function check_std(objectTopElem: unknown): unknown;

    function list_edit_open_select(list: unknown, params: unknown, target: unknown): unknown;

    function get_columns_array_by_field(fldChild: unknown, arrColumns: unknown): unknown;

    function server_on_init(topElem: unknown): unknown;

    function server_on_app_init(topElem: unknown): unknown;

    function set_next_coding(objectTargetTopElem: unknown): unknown;

    function ask_options_activate_objects_to_persons(type: string, arrValues: unknown): unknown;

    function ask_options_activate_qualifications_to_persons(assignment: boolean): unknown;

    function activate_objects_to_persons(taskId: string, type: string, objectIds: string, personIds: string, params: unknown): unknown;

    function assign_qualifications_to_objects(taskId: string, type: string, objectIds: string, params: unknown): unknown;

    function activate_to_objects(taskId: string, type: string, objectIds: string, params: unknown): unknown;

    function check_task(taskId: string, retTarget: unknown, request: Request): unknown;

    function init_task(params: unknown, delay: number): unknown;

    function init_task_data(taskInfoTopElem: unknown, delay: number): unknown;

    function start_task(taskId: string, methodName: string, methodParams: unknown): unknown;

    function start_task_data(taskId: string, methodName: string, methodParams: unknown): unknown;

    function get_task(taskId: string): unknown;

    function get_task_data(taskId: string): unknown;

    function set_task(taskId: string, taskInfoTopElem: unknown): string | void;

    function set_task_data(taskId: string, taskInfoTopElem: unknown): unknown;

    function get_tasks(taskList: string): unknown;

    function get_tasks_data(taskList: string): unknown;

    function set_task_field(taskId: string, fieldName: string, fieldValue: string): unknown;

    function set_task_field_data(taskId: string, fieldName: string, fieldValue: string): unknown;

    function remove_task(taskId: string): unknown;

    function remove_task_data(taskId: string): unknown;

    function set_message_task(taskId: string, params: unknown): unknown;

    function return_message_task(taskId: string, params: unknown): unknown;

    function show_massage_task(taskInfo: unknown): unknown;

    function start_task_progress(methodName: string, methodParams: unknown, params: unknown): unknown;

    function recover_task_progress(): unknown;

    function set_progress_info(taskId: string, params: unknown): unknown;

    function return_progress_info(taskId: string, params: unknown): unknown;

    function catalog_resave(taskId: string, catalogName: string, dataFlag: boolean, idFlag: boolean): unknown;

    function get_all_block_access_str(): unknown;

    function get_all_block_read_access_str(): unknown;

    function check_all_block_objects_access(catalogName: string, can: string): unknown;

    function check_objects_access(parentObjectsAccess: string, catalogName: string, can: string): unknown;

    function check_access_blocks_by_catalog_name(accessBlocks: string, catalogName: string, can: string): unknown;

    function check_user_by_catalog_name(userAccess: unknown, catalogName: string, can: string): unknown;

    function check_cur_user_access_blocks_by_catalog_name(catalogName: string, can: string): unknown;

    function check_cur_user_access_blocks(accessBloc: string, can: string): unknown;

    function check_cur_user_access_applications_by_catalog_name(catalogName: string, curUser: CurUser, contentAccess: unknown, canElem: string): unknown;

    function get_admin_init_server_data(): unknown;

    function enable_logs_server(): unknown;

    function validate_blog_entry_comments(object: unknown): unknown;

    function call_server_method(libName: string, methodName: string, arrParams: unknown): unknown;

    function exec_amgr_code(script: string): unknown;

    function navigate_view(frame: string, url: string): unknown;

    function navigate_list(url: string, type: string): unknown;

    function get_view_url(catalogName: string, urlQuery: string): unknown;

    function get_task_result_num(result: string): unknown;

    function get_callback_tasks(raramTopElem: unknown): unknown;

    function check_content_access(contentAccess: unknown, catalogName: string, objectId: number, accessType: string): unknown;

    function save_doc_screen(topElem: unknown): unknown;

    function set_view_templates(topElem: unknown): unknown;

    function get_field_path(fld: unknown): unknown;

    function create_package_objects(fldPackage: unknown): unknown;

    function disp_block(blockName: string): unknown;

    function create_resource_admin(url: string, sourceTopElem: unknown, screen: unknown): unknown;

    function get_main_screen(): unknown;

    function get_loop_array(topElem: unknown, list: unknown, dispRoles: boolean, dispFilter: boolean, dispHier: boolean, arrSelRows: unknown, parenId: number, searchType: string, remoteCollectionId: number, startPos: number, pageSize: number): unknown;

    function navigate_access_block(id: string, type: string, screenType: string): unknown;

    function get_access_block_items(fldAccessBlock: unknown): unknown;

    function set_cur_user_content_first_catalog_url(tabBlockType: string, objectId: number): unknown;

    function binary_load_from_url(fldTarget: unknown, url: string, b64encode: unknown): unknown;

    function run_view_action(topElem: unknown, screen: unknown, gridItemName: string): unknown;

    function convert_exec_code(fldExecTarget: unknown, fldUrlTarget: unknown, fldTextTarget: unknown): unknown;

    function convert_host_auth(topElem: unknown): unknown;

    function foreign_elem_title(fieldSource: unknown, fieldName: string, defauldText: string): unknown;

    let menu_arrs_env: XmlElem<unknown>;

    function get_menu_blocks(): unknown;

    function get_object_source_server(objectId: number): unknown;

    function calculate_statistic_rec_obj(statisticRecId: number, objectId: number, personId: number): unknown;

    function evaluate_remote_collection_obj(remoteCollection: unknown, objectId: number, personId: number, collectionParams: unknown, startPos: number, pageSize: number): unknown;

    function eval_menu_remote_action(list: unknown, listElemAction: unknown, screen: unknown): unknown;

    function eval_remote_action_step(remoteActionId: number, params: unknown): unknown;

    function eval_remote_action(remoteActionId: unknown, params: unknown, fldTopElem: unknown, screen: unknown, dispType: string): unknown;

    function get_remote_actions_by_cur_application(catalogName: string, viewConfigurationId: number): unknown;

    function get_element_property(elem: unknown, propertyName: string, altPropertyName: string, hasValue: boolean): unknown;

    function disp_application_view_configuration(applicationTopElem: unknown, viewConfigurationId: string, elemType: string, menuElem: unknown, noTab: boolean, onlyUrl: boolean): unknown;

    function disp_application_complex_block(blockId: string, noTab: boolean, onlyUrl: boolean): unknown;

    function update_access_blocks_doc_types(fldAccessBlocks: unknown): unknown;

    function update_claims_by_object(objectId: number, objectType: string, claimTypes: string): unknown;

    function get_doc_screen_wvars(doc: unknown): unknown;

    function evaluate_convert_post(lastVersion: string): unknown;
}
