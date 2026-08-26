export const repositoryUrl = 'https://github.com/fuji0567/fuji0567.github.io';
export const repositoryBranch = 'main';
export const blogContentPath = 'src/content/blog';

export function editPostUrl(id: string) {
  const encodedId = id.split('/').map(encodeURIComponent).join('/');
  return `${repositoryUrl}/edit/${repositoryBranch}/${blogContentPath}/${encodedId}.md`;
}
