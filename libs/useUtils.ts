export const useUtils = () => ({
  isImg: (file: string) => {
    var img = new Image();
    img.src = file;
    img.onload = function () {
      console.log("A imagem " + file + " existe");
      return file;
    };
    img.onerror = function () {
      console.log("A imagem " + file + " NAO existe");
      return "";
    };
  },

  urlIsValid: (urlImage: string) => {
    fetch(urlImage, { mode: "no-cors" })
      .then((response) => {
        // valida se a requisição falhou
        if (!response.ok) {
          // return new Error("falhou a requisição"); // cairá no catch da promise
          // console.log("Entrou no !Ok", urlImage);
          return "/assets/img/no-foto.svg";
        }

        // verificando pelo status
        if (response.status === 404) {
          // return new Error("não encontrou qualquer resultado");
          // console.log("Entrou no 404", urlImage);
          return "/assets/img/no-foto.svg";
        }

        // retorna uma promise com os dados em JSON
        // return response.json();
        console.log("ACESSOU CORRETAMENTE", urlImage);
        return urlImage;
      })
      .catch((erro) => {
        // console.log("Entrou no Catch", urlImage, erro);
        return "/assets/img/no-foto.svg";
      });
  },
});
