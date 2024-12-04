const _2_1 = new Proxy({"src":"/_astro/2_1.DZRo7BwA.jpg","width":480,"height":680,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/afhm/alifsense/prod/petrostar/src/images/industries/2_1.jpg";
							}
							
							return target[name];
						}
					});

export { _2_1 as default };
