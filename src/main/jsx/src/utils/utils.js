export function openBase64PDF(pdf) {
  var pdfWindow = window.open();
  pdfWindow.document.write(
    `<iframe src=${pdf} width="100%" height="100%" style="border:none;"></iframe>`
  );
  pdfWindow.document.body.style.margin = 0;
}

export async function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = () => {
      reject(reader.error);
    };
    reader.readAsDataURL(file);
  });
}

export async function saveFiles(files) {
  const formData = new FormData();
  for (var index = 0; index < files.length; index++) {
    formData.append("files", files[index]);
  }

  const response = await fetch("/api/uploadMultipleFiles", {
    method: "post",
    body: formData
  });

  let body = await response.json();
  return body;
}
