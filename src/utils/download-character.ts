import { Character } from '../modules/character/types';

export function downloadCharacter(characterObj: Character | null) {
  if (characterObj !== null) {
    download(
      JSON.stringify(characterObj),
      `${characterObj.name}.json`,
      'text/plain'
    );
  }
}

function download(content: BlobPart, fileName: string, contentType: string) {
  const a = document.createElement('a');
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  // URL.revokeObjectURL(file);
}
