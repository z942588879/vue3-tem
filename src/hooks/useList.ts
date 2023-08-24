import { ref, watch } from 'vue';
import type { Ref } from 'vue';

export default function useList<ItemType extends Object, FilterOption extends Object>(
  listRequestFn: Function,
  filterOption: Ref<Object>
) {
  // 加载态
  const loading = ref(false);
  // 当前页
  const curPage = ref(1);
  // 总数量
  const total = ref(0);
  // 分页大小
  const pageSize = ref(10);
  // 数据
  const list = ref<ItemType[]>([]);
  // 过滤数据
  // 获取列表数据
  const loadData = async (page = curPage.value) => {
    // 设置加载中
    loading.value = true;
    try {
      const {
        data,
        meta: { total: count },
      } = await listRequestFn(pageSize.value, page,filterOption.value);
      list.value = data;
      total.value = count;
    } catch (error) {
      console.log("请求出错了", "error");
    } finally {
      // 关闭加载中
      loading.value = false;
    }
  };
  // 监听分页数据改变
  watch([curPage, pageSize], () => {
    loadData(curPage.value);
  });
}
