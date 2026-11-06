/**
 * A work's title for listings: the English name only. A title may open with Chinese
 * characters (e.g. "澗序 Jianxu"); those stay on the work's own page, where the pinyin sits over them.
 */
export const listTitle = (title: string) => title.replace(/^\p{Script=Han}+\s*/u, '');
