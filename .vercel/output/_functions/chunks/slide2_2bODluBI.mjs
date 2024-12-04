const slide2 = new Proxy({"src":"/_astro/slide2.yeJiu0l0.jpg","width":1920,"height":960,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/afhm/alifsense/prod/petrostar/src/images/slider/slide2.jpg";
							}
							
							return target[name];
						}
					});

export { slide2 as default };
