import UrlUtils from "@/utils/URIUtils.ts"

describe("[utils] URL utils", () => {
    test("[util-name] getURIForInstallmentCalculation", () => {
        expect(UrlUtils.getURIForInstallmentCalculation()).toEqual('/api/v01/installment')
    })
})