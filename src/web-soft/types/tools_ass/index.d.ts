declare namespace tools_ass {
    function assessment_person_filling(source: unknown, personId: number, personDoc: unknown): unknown;

    function is_dismissed_by_id(personId: unknown): unknown;

    function pick_experts(aSSESSMENTId: number, uSERPERSONId: number, pARTICIPANT: unknown, iSHUMAN: unknown, lOG: unknown, iSCLEAN: unknown, nOTDISMISSED: unknown): unknown;

    function strip_workflow_from_assessment(cURSTATUS: unknown, cURTYPE: unknown): unknown;

    function generate_participant_by_plan(aSSESSMENTId: number, pARTICIPANTCODE: unknown, aSSESSMENTPLANId: number, eXPERTId: number, nEWPA: unknown): unknown;

    function generate_participant(aSSESSMENTId: number, pARTICIPANT: unknown, aUDITORY: unknown, aUDITORYPERSONDOC: unknown, aSSESSMENTPLAN: unknown, eXPERTId: number, iSHUMAN: unknown, lOG: unknown, nEWPA: unknown): unknown;

    function get_assessment_parameter(aSSESSMENTDOC: unknown, sTATUS: unknown, pARAMETER: unknown): unknown;

    function log_log(lOG: unknown, t: unknown): unknown;

    function steal_competence_mark_from_tests(pERSONId: number, cOMPETENCE: unknown): unknown;

    function development_2_education(developmentPlanId: string, budgetPeriodId: string): unknown;

    function check_access_matrix(aCCESSMATRIXId: number, pERSONId: number): unknown;

    function change_pa_values(aSSESSMENTPLAN: unknown, sTATUS: unknown, fIELDS: unknown, fVALS: unknown): unknown;

    function place_pa_comment(pAId: number, uSERId: number, pHASE: unknown, cOMMENT: unknown): unknown;

    function custom_expert_approval(eXPERTPERSONId: number, cURASSESSMENTPLAN: unknown, sTATUS: unknown, fLAGAPPROVE: unknown, pAId: number): unknown;

    function lock_period(aSSESSMENTPLAN: unknown, pERIODPERSONId: number, iSDONE: unknown): unknown;

    function spawn_new_version(aSSESSMENTPLAN: unknown, fIELDS: unknown, fVALS: unknown, sTATUS: unknown): unknown;

    function generate_bonuses(aSSESSMENTId: number, bONUSPROFILEId: number): unknown;

    function get_workflow_state_parameter(cURSTATE: unknown, pARAMNAME: unknown): unknown;

    function readParametersV2(pARAMSTR: unknown, curPA: unknown): unknown;

    function generate_position_assessment_form(aSSESSMENTId: number): unknown;

    function generate_assessment_plan(aSSESSMENTId: number, pLANONLY: unknown, iSCLEAN: unknown, kILL: unknown, fLOORBOUND: unknown, aCOUNT: unknown, gROUPId: number, aUDITORISIdS: unknown): unknown;

    function link_plans_and_pas(aSSESSMENTId: number): unknown;

    function create_event_assessment_plans(eventId: number): unknown;

    function generate_poll_procedure_result_card(pOLLPROCEDUREId: number, pOLLPROCEDUREDOC: unknown, pERSONId: number, pOLLId: number, pOLL: unknown, dONOTIFY: unknown): unknown;

    function generate_procedure_plan(aSSESSMENTAPPRAISEId: number, docASSESSMENTAPPRAISE: unknown, addOnlyNew: boolean): unknown;

    function generate_kpi_values(budgetPeriodId: number, budgetPeriodTopElem: unknown, kpiId: number, kpiTopElem: unknown): unknown;

    function manual_run_bonus_calc(): unknown;

    function run_bonus_calc(assessmentId: number, budgetPeriodId: number): unknown;

    function ui_set_competence_plan(selRows: unknown, flagMark: unknown): unknown;

    function ass_create_notification(type: unknown, objectId: number): unknown;
}
