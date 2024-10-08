declare namespace tools_cl {
    let generic_folder_prefix: XmlElem<string>;

    function html_decode(sourceHTML: string): unknown;

    function is_true_cl(value: string): unknown;

    function resource_tag(resourseId: number, fileNAme: string): unknown;

    function imprint(source: string): unknown;

    function convertToB62(number: number): unknown;

    function recursive_copy_url(sourceURL: string, destURL: string): unknown;

    function reveal_riches(text: string): unknown;

    let xsl_assembly: XmlElem<unknown>;

    function xsl_transform(xslString: unknown, xmlString: unknown, aParams: unknown): unknown;

    function lexicise_it(sSource: unknown, bInverse: unknown): unknown;

    function polska_functzia(sSource: unknown, bIsPostfix: unknown): unknown;

    function transform_event(eventXML: unknown, eventNode: string): unknown;

    function convertHTML2BB(hTML: string): unknown;

    function convertBB2HTML(bB: string): unknown;

    function xmlSubstituteConsts(xmlData: unknown, path: unknown, param: unknown, prefix: unknown, useShared: boolean, localizationId: number, courseId: unknown): unknown;

    function search_dupe_const(courseId: unknown, localizationId: unknown, text: string): unknown;

    function get_object(vIdentifier: unknown, openDoc: boolean): unknown;

    function process_resources(source: string, makeMyPrefix: string, regExpObject: unknown, xarrMyResources: unknown, resourceImbue: boolean, overwrite: boolean, docRepositoriumTARGET: unknown, curUserId: unknown, userTopElem: unknown, codeIdentifier: string, fileUrl: string): unknown;

    function i_get_my_roleid(curUserId: unknown, userTopElem: unknown): unknown;

    function is_author_of_type(vCourse: unknown, userId: number, type: number): unknown;

    let log_obj: XmlElem<unknown>;

    function log_cl_create(): unknown;

    function log_cl_log(mSG: string): unknown;

    function get_cl_log(): unknown;

    function update_params(paramsxml: string, etalonXml: string, vObject: unknown, options: unknown): unknown;

    function param_update_constants(xml: unknown, path: string, slideId: unknown, frameId: unknown, slideObjectId: unknown, courseId: unknown, localizationId: unknown, useShared: boolean): unknown;

    function get_constant_by_tag(text: string, objectId: unknown): unknown;

    function create_constant(text: string, objectId: unknown, objectCatalog: unknown, localizationId: unknown, type: unknown, originalValue: unknown, suggestedCode: string): unknown;

    function obtain_constant(param: string, localizationId: unknown, localizationValue: unknown, objectId: unknown, objectCatalog: unknown, flags: unknown): unknown;

    function build_constant_prefix(slideId: number, frameId: number, objectId: number): unknown;

    function summon_constants(objectId: number, textData: string, locId: number): unknown;

    function summon_aux_const(course: unknown, param: unknown, locId: number): unknown;

    function export_scorm(cLCourseId: number, curUserId: unknown, locId: number, paramsZipUrl: unknown): unknown;

    function build_wcl_back(cLCourseId: number): unknown;

    function build_object_xml(clObjId: number, wTD: string): unknown;

    function build_shape_xml(clShapeId: number): unknown;

    function build_module_xml_back(clModuleId: number): unknown;

    function build_slide_xml_back(clSlideId: number): unknown;

    function build_object_in_slide_xml(fldObjectElem: unknown, designTime: boolean, locId: unknown, courseId: unknown): unknown;

    function load_slide_from_xml_object(xmlSlide: unknown, courseCode: string, moduleId: number, courseId: number, docSlide: unknown, tryUpdate: boolean, tryXSlRetransform: boolean, localizationId: unknown): unknown;

    function load_module_from_description(workingDirUrl: string, xmlModuleDescription: unknown, courseCode: string, courseId: number, docRepositorium: unknown, userId: number, userTopElem: unknown, localizationId: unknown): unknown;

    function load_module_from_xml_object(moduleXML: unknown, vModule: unknown, courseId: number, xmlModuleDescription: unknown, sAiccCode: unknown, tryUpdate: boolean, template: boolean, localizationId: unknown): unknown;

    function manual_import_course_routine(): unknown;

    function import_course_routine(wCLUrl: string, course2: unknown, docCLCourse: unknown, repositoryId: number, userId: number, userTopElem: unknown, localizationId: unknown): unknown;

    function import_objects_from_list(xmlUrl: string, mode: string): unknown;

    function import_autoshape_from_folder(folderUrl: string, label: string): unknown;

    function import_module_templates_from_folder(folderUrl: string, label: string, localizationId: unknown): unknown;

    function import_objects_from_folder(folderUrl: string, label: string): unknown;

    function manual_import_objects_from_pack(mode: string): unknown;

    function import_objects_from_pack(fileUrl: string, mode: string): unknown;

    function generate_runtime_xml_cache(moduleId: number, moduleTopElem: unknown, curUserId: unknown, splash: boolean, locId: unknown, auxParams: unknown): unknown;

    function generate_runtime_xml(moduleId: number, moduleTopElem: unknown, curUserId: unknown, splash: boolean, locId: unknown, auxParams: unknown): unknown;

    function prepare_module_deserialization(moduleUrl: string, codeIdentifier: string, docRepositoriumTARGET: unknown, curUserId: unknown, userTopElem: unknown, overwrite: boolean): unknown;

    function eradicate_slide(docCLSlide: unknown): unknown;

    function make_module_real(docCLCourse: unknown, docModuleTepmlate: unknown, docRepositoriumTARGET: unknown, curUserId: unknown, userTopElem: unknown, xmlModuleDescription: unknown, immaterialSlides: boolean, localizationId: unknown): unknown;

    function read_resource(rTag: string, result: number): unknown;

    function export_constants(objectId: string, locoSourceId: number, locoTargetId: number, fileUrl: unknown): unknown;

    function import_constants(objectTopElem: unknown, xlsFileUrl: string): unknown;

    function convert_object_titles(objectId: number, localizationId: number): unknown;
}
