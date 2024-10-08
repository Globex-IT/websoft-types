declare namespace tools_lp {
    function check_access_lpe(curUser: CurUser): unknown;

    function check_web_mode_link(fldLink: unknown, env: unknown): unknown;

    function check_web_mode_disp(curWebMode: unknown, curOverrideWebTemplateId: unknown, env: unknown): unknown;

    function fill_context(xarrStatisticRecs: unknown, isObject: boolean, env: unknown, webModeTopElem: unknown): unknown;

    function get_context(catalogName: string, isObject: boolean, env: unknown): unknown;

    function get_web_mode_context(webModeTopElem: unknown, env: unknown, arrContextCodes: unknown): unknown;

    function substitute(text: string, env: unknown, lPE: boolean, lPEPreview: boolean): unknown;

    function cleanup_locals(text: string): unknown;

    function fld_to_arr(fld: unknown): unknown;

    function fld_to_obj(fld: unknown): unknown;

    function owt_wvars_to_json(oWTTopElem: unknown, basicParamsOnly: boolean): unknown;

    function plain_wvars_to_json(docTopElem: unknown, basicParamsOnly: boolean): unknown;

    function get_vars_from_cache(oWTTopElem: unknown): unknown;

    function get_preset(wDParamSets: unknown, prefix: string, preset: string): unknown;

    function get_runtime_data_from_cache(oWTTopElem: unknown, skipCache: boolean): unknown;

    function get_html_from_cache(oWTTopElem: unknown, skipCache: boolean): unknown;

    function update_legacy_params(params: unknown, aNewParams: unknown): unknown;

    function refresh_web_template_cache(webDesignId: number): unknown;

    function webcolor_to_hex(webColor: string): unknown;

    function hex_to_rgb(hexColor: string, rGBA: boolean, nOpacity: unknown): unknown;

    function any_color_to_rgb(color: string, rGBA: boolean, nOpacity: unknown): unknown;

    function get_owt_params(curParams: unknown, aOWTParams: unknown, prefix: string, usePreset: boolean, preset: unknown, oWTId: number, args: unknown): unknown;

    function apply_param_type(param: unknown, value: string): unknown;

    function get_template_cache_id(webModeId: number, siteId: number, locale: string): unknown;

    function save_template_cache(webModeTopElem: unknown, text: string, siteId: number, locale: string): unknown;

    function get_template_cache(webModeTopElem: unknown, siteId: number, locale: string): unknown;

    function replace_template_cache(webModeTopElem: unknown, text: string, request: Request): unknown;

    function replace_local_subs(colParams: unknown): unknown;

    function map_collection_result(colResult: unknown, aColMap: unknown): unknown;

    function fill_subs_with_values(env: unknown, arrSubs: unknown): unknown;

    function substitute_in_cache(text: string, arrSubs: unknown, paramsOnly: boolean): unknown;

    function collect_all_subs(text: string): unknown;

    function list_subs(args: unknown): unknown;

    function map_param_name(args: unknown): unknown;

    function map_item_param(args: unknown): unknown;

    function get_font_css(args: unknown): unknown;

    function get_workarea_css(args: unknown): unknown;

    function get_font_params_array(args: unknown): unknown;

    function get_block_css(args: unknown): unknown;

    function set_font_vars(args: unknown): unknown;

    function update_runtime_env(args: unknown): unknown;

    function copy_web_mode(sourceWebMode: unknown, webModeFields: unknown): unknown;

    function clear_template_cache(webDesignId: number): unknown;
}
