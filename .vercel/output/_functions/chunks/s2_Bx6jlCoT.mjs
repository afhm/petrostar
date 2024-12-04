const s2 = new Proxy({"src":"/_astro/s2.CjUv4ycx.png","width":1300,"height":956,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/afhm/alifsense/prod/petrostar/src/images/services/s2.png";
							}
							
							return target[name];
						}
					});

export { s2 as default };
