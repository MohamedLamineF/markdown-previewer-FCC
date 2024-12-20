export function stripHtml(html: string | Promise<string>): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html as string;
  return tmp.textContent || tmp.innerText || '';
}
