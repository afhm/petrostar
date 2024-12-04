const s5 = new Proxy({"src":"/_astro/s5.BK6AQXb8.png","width":1280,"height":849,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/afhm/alifsense/prod/petrostar/src/images/services/s5.png";
							}
							
							return target[name];
						}
					});

export { s5 as default };
