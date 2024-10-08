declare namespace tools_report {
    function log_report(msg: string): unknown;

    function model_roles(curUserId: number, applicationId: number, blockName: string): unknown;

    function save_report_to_file(html: string, reportName: string, outType: string, fileUrl: string, isWebClient: boolean, columns: string, arrData: unknown, params: unknown): unknown;

    function read_report_settings(reportName: string, topElem: unknown, arrParams: unknown): unknown;

    function save_report_settings(reportName: string, arrParams: unknown): unknown;

    function ExcelColumnsList(): unknown;

    function MaxReportVisibleRows(): unknown;

    function MaxWorksheetRows(): unknown;

    function bIsLinux(): unknown;

    function not_studied_report(params: unknown): unknown;

    function not_certified_report(params: unknown): unknown;

    function qualification_report(params: unknown): unknown;

    function statistic_report(str: string): unknown;

    function policy_type_report(params: unknown): unknown;

    function benefit_report(params: unknown): unknown;

    function payment_type_report(params: unknown): unknown;

    function no_request_by_good_report(params: unknown): unknown;

    function transaction_report(params: unknown): unknown;

    function good_statistics_report(params: unknown): unknown;

    function request_statistics_report(params: unknown): unknown;

    function poll_report(params: unknown): unknown;

    function poll_procedure_report(params: unknown): unknown;

    function view_accounts(ps: unknown, curUserId: number, applicationId: number): unknown;

    function view_badges(ps: unknown, curUserId: number, applicationId: number): unknown;

    function view_awards(ps: unknown, curUserId: number, applicationId: number): unknown;

    function events_report(params: unknown, curUser: CurUser): unknown;

    function persons_report(ps: unknown): unknown;

    function course_part_report(params: unknown, curUser: CurUser): unknown;

    function exceed_course_report(params: unknown, curUser: CurUser): unknown;

    function question_report(params: unknown, curUser: CurUser): unknown;

    function test_question_report(params: unknown, curUser: CurUser): unknown;

    function successors_report(params: unknown, curUser: CurUser): unknown;

    function key_positions_protection_report(params: unknown, curUser: CurUser): unknown;

    function fnGetCourseVersionFromUrl(strUrl: string): unknown;

    function fnCreateExcelFile(param: unknown, fldParamForm: unknown, fldDataForm: unknown): unknown;

    function fnSaveFile(object: unknown, fileType: string, clearObject: boolean, destination: string): unknown;

    function fnFindFileType(fileUrl: string): unknown;

    function arrayCross(arrFirst: unknown, arrSecond: unknown): unknown;

    function getCatUser(fldLearning: unknown): unknown;

    function fnAddLearnings(arrLearning: unknown, fldParamForm: unknown, fldDataForm: unknown, res: unknown): unknown;

    function fnAddTestLearnings(arrTestLearning: unknown, fldParamForm: unknown, fldDataForm: unknown, res: unknown): unknown;

    function fnAddCareerReserves(arrLoop: unknown, fldParamForm: unknown, fldDataForm: unknown, res: unknown): unknown;

    function course_report(ps: unknown, curUserId: number, applicationId: number): unknown;

    function competence_by_depart_report(str: string): unknown;

    function event_dep_report(str: string, curUser: CurUser): unknown;

    function budget_report(xml: string): unknown;

    function request_report(params: unknown): unknown;

    function server_log_report(str: string): unknown;

    function education_method_report(str: string): unknown;

    function event_by_depart_report(str: string, curUser: CurUser): unknown;

    function budget_transfers_report(): unknown;

    function course_by_depart_report(str: string): unknown;

    function test_by_depart_report(str: string): unknown;

    function certificate_type_report(params: unknown): unknown;

    function test_report(str: string, curUserId: number, applicationId: number): unknown;

    function course_objectives_report(params: unknown): unknown;

    function course_module_report(params: unknown): unknown;

    function question_by_depart_report(str: string): unknown;

    function event_person_report(str: string, curUser: CurUser): unknown;

    function profiling_report(xml: string): unknown;

    function test_person_report(ps: unknown): unknown;

    function educ_plan_report(ps: unknown): unknown;

    function learning_dynamics_report(params: string): unknown;

    function learning_statistics_report(str: string): unknown;

    function course_integral_efficiency_report(str: string): unknown;

    function questions_analytics_report(str: string): unknown;

    function course_comment_report(str: string): unknown;

    function course_module_status_report(str: string): unknown;

    function get_report_data(url: string, switchForm: boolean, reportName: string): unknown;

    function career_reserve_report(str: string): unknown;

    function run_db_perfomance_test(checkCurrentDb: unknown, countUsers: unknown): unknown;

    function gather_system_info(): unknown;

    function get_xhttp_info(): unknown;

    function custom_report_html_export(customReportId: number, customReportTopElem: unknown, curUserId: number, outType: string): unknown;

    function custom_report_export_to_file(vCustomReport: unknown, curUserId: number, outType: string, fileUrl: string): unknown;

    function list_html_export(list: unknown, outType: string): unknown;

    function load_word(html: string, fileUrl: string): unknown;

    function load_excel(html: string, fileUrl: string): unknown;

    function list_export_to_file(list: unknown, outType: string, fileUrl: string): unknown;

    function recommender_detail_report(ps: unknown): unknown;

    function recommender_use_report(str: string): unknown;

    function recommender_compare_report(str: string): unknown;
}
