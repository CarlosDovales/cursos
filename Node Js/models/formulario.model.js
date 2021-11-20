class FormularioModel {
    constructor(
        orgName,
        orgUlr,
        nameTec,
        emailTec,
        tiempoProceso
    ){
        this.orgName = orgName;
        this.orgUlr = orgUlr;
        this.nameTec = nameTec;
        this.emailTec = emailTec;
        this.tiempoProceso = tiempoProceso;

    }

    formularioModel = {
        nombreOrg: this.orgName,
        dominioOrg: this.orgUlr,
        nombreTec: this.nameTec,
        correoTec: this.correoTec,
        tProceso: this.tiempoProceso
    }
}

module.exports.FormularioModel = FormularioModel;