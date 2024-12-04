const s4 = new Proxy({"src":"/_astro/s4.A_OX0orj.png","width":1280,"height":700,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/afhm/alifsense/prod/petrostar/src/images/services/s4.png";
							}
							
							return target[name];
						}
					});

export { s4 as default };
