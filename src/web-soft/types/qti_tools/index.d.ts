declare namespace qti_tools {
    function date_generate(minutes: unknown): unknown;

    function date_sec_generate(secs: unknown): unknown;

    function get_valid_filename(name: unknown, doCut: boolean): unknown;

    function qti_generate(assessmentId: number, url: unknown, imageUrl: unknown): unknown;

    function get_relational_url(url: unknown): unknown;

    function course_import_info_generate(testId: number, url: unknown): unknown;

    function display_qti_generate_error(str: unknown): unknown;

    function get_qti_zip(assessmentId: number): unknown;

    function pulish_assessment(assessment: unknown, coursePath: string): unknown;

    function qti_return(assessmentId: number, imagesUrl: unknown, fldLearningTarget: unknown): unknown;

    function set_qti_comment_duration_objectives(fieldSource: unknown, fldFrom: unknown, objectId: number, clLocalizationId: number): unknown;

    function set_qti_control(fieldSource: unknown, fldFrom: unknown, parentDisplayCorrectAnswer: boolean, parentDisplayfeedback: boolean): unknown;

    function set_qti_material(fieldSource: unknown, cData: string, objectId: number, clLocalizationId: number): unknown;

    function put_qti_matimage(fldImage: unknown, prefix: string, imagesDir: string, objectId: number, clLocalizationId: number): unknown;

    function set_qti_material_matimage(fieldSource: unknown, cData: string, fldImage: unknown, prefix: string, imagesDir: string, objectTopElem: unknown, clLocalizationId: number): unknown;

    function set_qti_rubric(fieldSource: unknown, fldFrom: unknown, prefix: string, imagesDir: string, objectTopElem: unknown, clLocalizationId: number): unknown;

    function set_qti_item(fldItem: unknown, item: unknown, imagesDir: string, fldSection: unknown, clLocalizationId: number): unknown;

    function get_gti_obj(assessment: unknown, imagesDir: string, publish: boolean, clLocalizationId: number): unknown;

    function max_score_return(qtiText: string): unknown;

    function get_player_url_param(assessmentId: number, assessmentDoc: unknown, viewType: string): unknown;

    function get_default_testing_system_id(): unknown;

    function get_testing_system(param: unknown): unknown;

    function call_testing_system_method(param: unknown, methodName: string, arr: unknown, returnUrl: boolean): unknown;

    function set_qti_fields(fldTarget: unknown, param: unknown): unknown;

    function clear_qti_correct_answer(qti: string): unknown;

    function convert_item(docLearning: unknown, fldParams: unknown): unknown;

    function prepare_qti_run(assessmentId: number): unknown;

    function get_question_num(fldObjects: unknown, type: string): unknown;
}
