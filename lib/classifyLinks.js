export const classifyLinks = (links) => {
  const arrangedLinks = {};
  for (let i = 0; i < links.length; i++) {
    const parentId = links[i].id;
    const childIds = [];
    for (let j = 0; j < links.length; j++) {
      if (links[j].up_topic_id === parentId) {
        childIds.push(links[j].id);
      }
      arrangedLinks[parentId] = {
        id: parentId,
        topic: links[i].topic,
        childIds: childIds,
      };
    }
  }
return arrangedLinks
};