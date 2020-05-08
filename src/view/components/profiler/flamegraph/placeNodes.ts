import { CommitData, ProfilerNode } from "../data/commits";

/**
 * Flatten profiler node tree into a flat list
 */
export function flattenNodeTree<K, T extends { id: K; children: K[] }>(
	tree: Map<K, T>,
	id: K,
): T[] {
	const out: T[] = [];
	const visited = new Set<K>();
	const stack: K[] = [id];

	while (stack.length > 0) {
		const item = stack.pop();
		if (item == null) continue;

		const node = tree.get(item);
		if (!node) continue;

		if (!visited.has(node.id)) {
			out.push(node);
			visited.add(node.id);

			for (let i = node.children.length; i--; ) {
				stack.push(node.children[i]);
			}
		}
	}

	return out;
}

export const EMPTY_COMMIT: CommitData = {
	commitRootId: -1,
	duration: -1,
	maxDepth: 1,
	maxSelfDuration: 1,
	nodes: new Map(),
	rootId: -1,
};

export const EMPTY: ProfilerNode = {
	children: [],
	depth: 0,
	duration: 0,
	endTime: 0,
	id: -1,
	key: "",
	name: "",
	parent: -1,
	selfDuration: 0,
	startTime: 0,
	treeEndTime: 0,
	treeStartTime: 0,
	type: 0,
};

/**
 * The minimum width of a node inside the flamegraph.
 * This ensures that the user doesn't miss any nodes
 * that would be smaller than <1px because of zooming
 */
export const MIN_WIDTH = 6;
