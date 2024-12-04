const about = new Proxy({"src":"/_astro/about.DfkdQPBT.png","width":1180,"height":1536,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/afhm/alifsense/prod/petrostar/src/images/about.png";
							}
							
							return target[name];
						}
					});

export { about as default };
