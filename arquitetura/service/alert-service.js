angular.module('delta').service('AlertService', AlertService);

AlertService.$inject = ['toastr'];

function AlertService(toastr){

    this.showSuccess = showSucces;
    this.showError = showError;
    this.showWarning = showWarning;
    this.showInfo = showInfo;
    var progressbar = {progressBar: true};

    function showSucces(mensagem, titulo){
        if(!titulo){
            titulo = 'OK';
        }
        toastr.success(mensagem, titulo, progressbar);
    }

    function showError(mensagem, titulo){
        if(!titulo){
            titulo = 'Erro';
        }
        toastr.error(mensagem, titulo,  progressbar);
    }

    function showWarning(mensagem, titulo){
        if(!titulo){
            titulo = 'Alerta';
        }
        toastr.warning(mensagem, titulo, progressbar);
    }

    function showInfo(mensagem, titulo){
        if(!titulo){
            titulo = 'Info';
        }
        toastr.info(mensagem, titulo, progressbar);
    }


}