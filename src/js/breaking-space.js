//////////////////////
/// Breaking space ///
//////////////////////

export function init_breaking_space () {
    var tree = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    while (tree.nextNode()) {
        tree.currentNode.nodeValue = tree.currentNode.nodeValue.replace(/(\d)\s/gu, '$1\xa0')
        tree.currentNode.nodeValue = tree.currentNode.nodeValue.replace(/\s([;:!?])/gu, '\xa0$1')
    }
}