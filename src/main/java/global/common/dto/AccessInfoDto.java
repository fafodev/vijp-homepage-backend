package global.common.dto;


public class AccessInfoDto extends AbstractDto{

	// ユーザコード
	public String USRCD;

	// ユーザ名
	public String USRNM;

	// 荷主コード
	public String CSTMCD;

	// 荷主名
	public String CSTMNM;

	// 倉庫コード
	public String BRNCHCD;

	// 倉庫名
	public String BRNCHNM;

	// プロセスID
	public String PRCSID;

	// 言語
	public String language;

	// トークン
	public String TOKEN;

	// 自動更新対策
	public Integer AUTOREQ;

	// 自動更新対策
	public boolean isAUTOREQ =false;

	//APIから呼ばれたかを判定
	public boolean isAPI = false;
}
