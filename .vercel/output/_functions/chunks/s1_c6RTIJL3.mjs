const s1 = new Proxy({"src":"/_astro/s1.DKWyoQAk.png","width":1500,"height":838,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/afhm/alifsense/prod/petrostar/src/images/services/s1.png";
							}
							
							return target[name];
						}
					});

export { s1 as default };
