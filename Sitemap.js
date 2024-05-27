//disable flicker defender gear -begin
if (
  typeof (SalesforceInteractions.mcis.FlickerDefender || {}).setPageMatchTimeout === "function"
) {
  SalesforceInteractions.mcis.FlickerDefender.setPageMatchTimeout(0);
}
if (
  typeof (SalesforceInteractions.mcis.FlickerDefender || {}).setRedisplayTimeout === "function"
) {
  SalesforceInteractions.mcis.FlickerDefender.setRedisplayTimeout(0);
}
//disable flicker defender gear -end

SalesforceInteractions.init({
    cookieDomain: "web1-39e41.web.app",
    consents: [{
        purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
        provider: "Example Consent Manager",
        status: SalesforceInteractions.ConsentStatus.OptIn
    }]
}).then(() => {
    const sitemapConfig = {
        global: {
            locale: "en_US",
            onActionEvent: (actionEvent) => {
                const email = SalesforceInteractions.mcis.getValueFromNestedObject("window._etmc.user_info.email");
                if (email) {
                    actionEvent.user = actionEvent.user || {};
                    actionEvent.user.identities = actionEvent.user.identities || {};
                    actionEvent.user.identities.emailAddress = email;
                }
                return actionEvent;
            },
            contentZones: [
                { name: "global_infobar_top_of_page", selector: "nav.navBar" },
                { name: "global_footer_bottom_of_page", selector: ".FooterContainer" },
                { name: "NAV", selector: ".navegador" },
            ],
            listeners: [
                SalesforceInteractions.listener("submit", ".email-signup", () => {
                    const email = SalesforceInteractions.cashDom("#dwfrm_mcsubscribe_email").val();
                    if (email) {
                        SalesforceInteractions.sendEvent({
                            interaction: {
                                name: "Email Sign Up - Footer"
                            },
                            user: {
                                identities: {
                                    emailAddress: email
                                }
                            }
                        });
                    }
                })
            ],
        },
        pageTypeDefault: {
            name: "default",
            interaction: {
                name: "Default Page"
            }
        },
        pageTypes: [
            {
                name: "product_detail",
                /*
                The best practice for isMatch is to match as quickly as possible. If matching immediately is not an option, you can use a Promise.
                The Promise should resolve true or false and not pend indefinitely. This Promise example uses a setTimeout to prevent the isMatch from pending indefinitely if the match condition is not met fast enough. In this scenario, we know that the match condition will be met within 50 milliseconds or not at all. Note that using a timeout like this might not be sufficient in all cases and if you are using a Promise it should be tailored to your specific use-case. 
                */
                isMatch: () => new Promise((resolve, reject) => {
                    let isMatchPDP = setTimeout(() => {
                        resolve(false);
                    }, 50);
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded("div.page[data-action='Product-Show']", "html").then(() => {
                        clearTimeout(isMatchPDP);
                        resolve(true);
                    })
                }),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Product",
                        id: () => {
                            return SalesforceInteractions.util.resolveWhenTrue.bind(() => {
                                const productId = SalesforceInteractions.cashDom(".ProductID").first().text();
                                const products = getProductsFromDataLayer();
                                if (products && products.length > 0) {
                                    return products[0].id;
                                } else if (productId) {
                                    return productId;
                                } else {
                                    return false;
                                }
                            })
                        },
                        attributes: {
                            sku: { id: SalesforceInteractions.cashDom(".product-detail[data-pid]").attr("data-pid") },
                            name: SalesforceInteractions.resolvers.fromSelector(".ProductName"),
                            description: SalesforceInteractions.resolvers.fromSelector(".ProductDescription"),
                            url: SalesforceInteractions.resolvers.fromHref(),
                            imageUrl: SalesforceInteractions.resolvers.fromSelector(".ImgURL"),
                            inventoryCount: 1,
                            price: SalesforceInteractions.resolvers.fromSelector(".ProductPrice", (price) => parseFloat(price.replace(/[^0-9\.]+/g,"")))
                        },
                    }
                },
                contentZones: [
                    { name: "product_detail_recs_row_1", selector: ".ProductDescription" },
                    { name: "product_detail_recs_row_2", selector: ".ProductPrice" },
                    { name: "product_detail_recs_row_3", selector: "" },
                ],
                listeners: [
                    SalesforceInteractions.listener("click", ".Add-To-Cart", () => {
                        let lineItem = SalesforceInteractions.mcis.buildLineItemFromPageState("select.quantity-select option:checked");
                        SalesforceInteractions.sendEvent({
                            interaction: {
                                name: SalesforceInteractions.CartInteractionName.AddToCart,
                                lineItem: lineItem
                            }
                        })
                    })
                ]
            },
            {
                name: "category",   
                isMatch: () => /\/products/.test(window.location.href),
                interaction: {
                    name: "Products"
                },
                 contentZones: [
                    { name: "title", selector: ".TITLE" },
                ],

            },
            {
                name: "homepage",   
                isMatch: () => /\/homepage/.test(window.location.href),
                interaction: {
                    name: "Homepage"
                },
                contentZones: [
                    { name: "home_hero", selector: ".ContentZone" },
                    { name: "home_hero2", selector: ".TextIMG" },
                    { name: "MainImg", selector: ".MainIMG" },
                    { name: "home_CTA", selector: ".MainButton" },
                    { name: "recomendations", selector: ".ContentZone2" },
                ],
                listeners: [
                    SalesforceInteractions.listener("click", ".MainButton", () => {
                        SalesforceInteractions.sendEvent({
                            interaction: {
                                name: "Explorar"
                            }
                        })
                    })
                ]
            }
        ]
    };
    const getProductsFromDataLayer = () => {
        if (window.dataLayer) {
            for (let i = 0; i < window.dataLayer.length; i++) {
                if ((window.dataLayer[i].ecommerce && window.dataLayer[i].ecommerce.detail || {}).products) {
                    return window.dataLayer[i].ecommerce.detail.products;
                }
            }
        }
    };
    SalesforceInteractions.initSitemap(sitemapConfig);
});