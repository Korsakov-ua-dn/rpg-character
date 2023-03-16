export function jsonUploadInput() {
  return new Promise((resolve) => {
    const inputFileElement = document.createElement('input');
    inputFileElement.setAttribute('type', 'file');
    inputFileElement.setAttribute('multiple', 'false');
    inputFileElement.setAttribute('accept', '.json');

    inputFileElement.addEventListener(
      'change',
      async (event) => {
        const { files } = event.target as HTMLInputElement;
        if (!files) {
          return;
        }

        const filePromise = files[0].text();

        resolve(await filePromise);
      },
      false
    );
    inputFileElement.click();
  });
}
