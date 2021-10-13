var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDTSFileForModuleWithVersion = exports.getFiletreeForModuleWithVersion = exports.getNPMVersionForModuleReference = exports.getNPMVersionsForModule = void 0;
    //  https://github.com/jsdelivr/data.jsdelivr.com
    const getNPMVersionsForModule = (config, moduleName) => {
        const url = `https://data.jsdelivr.com/v1/package/npm/${moduleName}`;
        return api(config, url);
    };
    exports.getNPMVersionsForModule = getNPMVersionsForModule;
    const getNPMVersionForModuleReference = (config, moduleName, reference) => {
        const url = `https://data.jsdelivr.com/v1/package/resolve/npm/${moduleName}@${reference}`;
        return api(config, url);
    };
    exports.getNPMVersionForModuleReference = getNPMVersionForModuleReference;
    const getFiletreeForModuleWithVersion = (config, moduleName, version) => __awaiter(void 0, void 0, void 0, function* () {
        const url = `https://data.jsdelivr.com/v1/package/npm/${moduleName}@${version}/flat`;
        const res = yield api(config, url);
        if (res instanceof Error) {
            return res;
        }
        else {
            return Object.assign(Object.assign({}, res), { moduleName,
                version });
        }
    });
    exports.getFiletreeForModuleWithVersion = getFiletreeForModuleWithVersion;
    const getDTSFileForModuleWithVersion = (config, moduleName, version, file) => __awaiter(void 0, void 0, void 0, function* () {
        // file has a prefix / in falr mode
        const url = `https://cdn.jsdelivr.net/npm/${moduleName}@${version}${file}`;
        const f = config.fetcher || fetch;
        const res = yield f(url, { headers: { "User-Agent": `Type Acquisition ${config.projectName}` } });
        if (res.ok) {
            return res.text();
        }
        else {
            return new Error("OK");
        }
    });
    exports.getDTSFileForModuleWithVersion = getDTSFileForModuleWithVersion;
    function api(config, url) {
        const f = config.fetcher || fetch;
        return f(url, { headers: { "User-Agent": `Type Acquisition ${config.projectName}` } }).then(res => {
            if (res.ok) {
                return res.json().then(f => f);
            }
            else {
                return new Error("OK");
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NhbmRib3gvc3JjL3ZlbmRvci9hdGEvYXBpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBRUEsaURBQWlEO0lBRTFDLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxNQUEwQixFQUFFLFVBQWtCLEVBQUUsRUFBRTtRQUN4RixNQUFNLEdBQUcsR0FBRyw0Q0FBNEMsVUFBVSxFQUFFLENBQUE7UUFDcEUsT0FBTyxHQUFHLENBQXVELE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUMvRSxDQUFDLENBQUE7SUFIWSxRQUFBLHVCQUF1QiwyQkFHbkM7SUFFTSxNQUFNLCtCQUErQixHQUFHLENBQUMsTUFBMEIsRUFBRSxVQUFrQixFQUFFLFNBQWlCLEVBQUUsRUFBRTtRQUNuSCxNQUFNLEdBQUcsR0FBRyxvREFBb0QsVUFBVSxJQUFJLFNBQVMsRUFBRSxDQUFBO1FBQ3pGLE9BQU8sR0FBRyxDQUE2QixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDckQsQ0FBQyxDQUFBO0lBSFksUUFBQSwrQkFBK0IsbUNBRzNDO0lBSU0sTUFBTSwrQkFBK0IsR0FBRyxDQUM3QyxNQUEwQixFQUMxQixVQUFrQixFQUNsQixPQUFlLEVBQ2YsRUFBRTtRQUNGLE1BQU0sR0FBRyxHQUFHLDRDQUE0QyxVQUFVLElBQUksT0FBTyxPQUFPLENBQUE7UUFDcEYsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQWMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQy9DLElBQUksR0FBRyxZQUFZLEtBQUssRUFBRTtZQUN4QixPQUFPLEdBQUcsQ0FBQTtTQUNYO2FBQU07WUFDTCx1Q0FDSyxHQUFHLEtBQ04sVUFBVTtnQkFDVixPQUFPLElBQ1I7U0FDRjtJQUNILENBQUMsQ0FBQSxDQUFBO0lBaEJZLFFBQUEsK0JBQStCLG1DQWdCM0M7SUFFTSxNQUFNLDhCQUE4QixHQUFHLENBQzVDLE1BQTBCLEVBQzFCLFVBQWtCLEVBQ2xCLE9BQWUsRUFDZixJQUFZLEVBQ1osRUFBRTtRQUNGLG1DQUFtQztRQUNuQyxNQUFNLEdBQUcsR0FBRyxnQ0FBZ0MsVUFBVSxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQTtRQUMxRSxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQTtRQUNqQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNqRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUU7WUFDVixPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUNsQjthQUFNO1lBQ0wsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUN2QjtJQUNILENBQUMsQ0FBQSxDQUFBO0lBZlksUUFBQSw4QkFBOEIsa0NBZTFDO0lBRUQsU0FBUyxHQUFHLENBQUksTUFBMEIsRUFBRSxHQUFXO1FBQ3JELE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFBO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ1YsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBTSxDQUFDLENBQUE7YUFDcEM7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUN2QjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFUQUJvb3RzdHJhcENvbmZpZyB9IGZyb20gXCIuXCJcblxuLy8gIGh0dHBzOi8vZ2l0aHViLmNvbS9qc2RlbGl2ci9kYXRhLmpzZGVsaXZyLmNvbVxuXG5leHBvcnQgY29uc3QgZ2V0TlBNVmVyc2lvbnNGb3JNb2R1bGUgPSAoY29uZmlnOiBBVEFCb290c3RyYXBDb25maWcsIG1vZHVsZU5hbWU6IHN0cmluZykgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9kYXRhLmpzZGVsaXZyLmNvbS92MS9wYWNrYWdlL25wbS8ke21vZHVsZU5hbWV9YFxuICByZXR1cm4gYXBpPHsgdGFnczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjsgdmVyc2lvbnM6IHN0cmluZ1tdIH0+KGNvbmZpZywgdXJsKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TlBNVmVyc2lvbkZvck1vZHVsZVJlZmVyZW5jZSA9IChjb25maWc6IEFUQUJvb3RzdHJhcENvbmZpZywgbW9kdWxlTmFtZTogc3RyaW5nLCByZWZlcmVuY2U6IHN0cmluZykgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9kYXRhLmpzZGVsaXZyLmNvbS92MS9wYWNrYWdlL3Jlc29sdmUvbnBtLyR7bW9kdWxlTmFtZX1AJHtyZWZlcmVuY2V9YFxuICByZXR1cm4gYXBpPHsgdmVyc2lvbjogc3RyaW5nIHwgbnVsbCB9Pihjb25maWcsIHVybClcbn1cblxuZXhwb3J0IHR5cGUgTlBNVHJlZU1ldGEgPSB7IGRlZmF1bHQ6IHN0cmluZzsgZmlsZXM6IEFycmF5PHsgbmFtZTogc3RyaW5nIH0+OyBtb2R1bGVOYW1lOiBzdHJpbmc7IHZlcnNpb246IHN0cmluZyB9XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxldHJlZUZvck1vZHVsZVdpdGhWZXJzaW9uID0gYXN5bmMgKFxuICBjb25maWc6IEFUQUJvb3RzdHJhcENvbmZpZyxcbiAgbW9kdWxlTmFtZTogc3RyaW5nLFxuICB2ZXJzaW9uOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9kYXRhLmpzZGVsaXZyLmNvbS92MS9wYWNrYWdlL25wbS8ke21vZHVsZU5hbWV9QCR7dmVyc2lvbn0vZmxhdGBcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpPE5QTVRyZWVNZXRhPihjb25maWcsIHVybClcbiAgaWYgKHJlcyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgcmV0dXJuIHJlc1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXMsXG4gICAgICBtb2R1bGVOYW1lLFxuICAgICAgdmVyc2lvbixcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERUU0ZpbGVGb3JNb2R1bGVXaXRoVmVyc2lvbiA9IGFzeW5jIChcbiAgY29uZmlnOiBBVEFCb290c3RyYXBDb25maWcsXG4gIG1vZHVsZU5hbWU6IHN0cmluZyxcbiAgdmVyc2lvbjogc3RyaW5nLFxuICBmaWxlOiBzdHJpbmdcbikgPT4ge1xuICAvLyBmaWxlIGhhcyBhIHByZWZpeCAvIGluIGZhbHIgbW9kZVxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS8ke21vZHVsZU5hbWV9QCR7dmVyc2lvbn0ke2ZpbGV9YFxuICBjb25zdCBmID0gY29uZmlnLmZldGNoZXIgfHwgZmV0Y2hcbiAgY29uc3QgcmVzID0gYXdhaXQgZih1cmwsIHsgaGVhZGVyczogeyBcIlVzZXItQWdlbnRcIjogYFR5cGUgQWNxdWlzaXRpb24gJHtjb25maWcucHJvamVjdE5hbWV9YCB9IH0pXG4gIGlmIChyZXMub2spIHtcbiAgICByZXR1cm4gcmVzLnRleHQoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJPS1wiKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwaTxUPihjb25maWc6IEFUQUJvb3RzdHJhcENvbmZpZywgdXJsOiBzdHJpbmcpOiBQcm9taXNlPFQgfCBFcnJvcj4ge1xuICBjb25zdCBmID0gY29uZmlnLmZldGNoZXIgfHwgZmV0Y2hcbiAgcmV0dXJuIGYodXJsLCB7IGhlYWRlcnM6IHsgXCJVc2VyLUFnZW50XCI6IGBUeXBlIEFjcXVpc2l0aW9uICR7Y29uZmlnLnByb2plY3ROYW1lfWAgfSB9KS50aGVuKHJlcyA9PiB7XG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbihmID0+IGYgYXMgVClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIk9LXCIpXG4gICAgfVxuICB9KVxufVxuIl19