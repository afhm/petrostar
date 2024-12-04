const ab2 = new Proxy({"src":"/_astro/ab-2.Tc-sQcEp.jpg","width":360,"height":360,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/afhm/alifsense/prod/petrostar/src/images/ab-2.jpg";
							}
							
							return target[name];
						}
					});

export { ab2 as default };
